import { Request, Response } from 'express';
import worldCupsService from '../service/worldCupService';

const serverError = 'Ocorreu um erro interno.';

class WorldCupController {
  public async getWorldCups(req: Request, res: Response): Promise<Response> {
    const { runnerUp } = req.query;
    if (runnerUp) {
      try {
        const worldCups = await worldCupsService.getWorldCupByRunnerUp(runnerUp.toString());
        return res.status(200).send(worldCups);
      } catch (error) {
        return res.status(500).send(serverError);
      }
    }
    try {
      const worldCups = await worldCupsService.getWorldCups();
      return res.status(200).send(worldCups);
    } catch (error) {
      return res.status(500).send(serverError);
    }
  }

  public async getWorldCupByYear(req: Request, res: Response): Promise<Response> {
    const { year } = req.params;
    try {
      const worldCup = await worldCupsService.getWorldCupByYear(Number(year));
      if (worldCup?.length === 0) {
        return res.status(404).send({ error: 'Not found any world cup with this year' });
      }
      return res.status(200).send(worldCup);
    } catch (error) {
      return res.status(500).send(serverError);
    }
  }

  public async insertWorldCup(req: Request, res: Response): Promise<Response> {
    const { body: worldCupData } = req;
    try {
      const worldCup = await worldCupsService.insertWorldCup(worldCupData);
      return res.status(201).send(worldCup);
    } catch ({ _message }) {
      if (_message === 'tournaments validation failed') return res.status(400).send(_message);
      return res.status(500).send(serverError);
    }
  }

  public async updateWorldCup(req: Request, res: Response): Promise<Response> {
    const { body: updateData, params: { year } } = req;
    try {
      const updatedWorldCup = await worldCupsService.updateWorldCup(updateData, Number(year));
      return res.status(200).send(updatedWorldCup);
    } catch (error) {
      console.log(error);
      return res.status(500).send(serverError);
    }
  }

  public async deleteWorldCup(req: Request, res: Response): Promise<Response> {
    const { year } = req.params;
    try {
      const deletedWorldCup = await worldCupsService.deleteWorldCup(Number(year));
      return res.status(200).send(deletedWorldCup);
    } catch (error) {
      console.log(error);
      return res.status(500).send(serverError);
    }
  }
}

export default new WorldCupController();