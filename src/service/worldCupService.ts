import { IWorldCup } from '../Schemas/worldCup';
import worldCupModel from '../model/worldCupModel';

class WorldCupService {
  public async getWorldCups(): Promise<IWorldCup[] | undefined> {
    try {
      const worldCups = await worldCupModel.getWorldCups();
      return worldCups;
    } catch (error) {
      console.log(error);
    }
  }

  public async getWorldCupByYear(year: number): Promise<IWorldCup[] | undefined> {
    try {
      const worldCup = await worldCupModel.getWorldCupByYear(year);
      return worldCup;
    } catch (error) {
      console.log(error);
    }
  }

  public async insertWorldCup(worldCupData: IWorldCup): Promise<IWorldCup | unknown> {
    try {
      const worldCup = await worldCupModel.insertWorldCup(worldCupData);
      return worldCup;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  public async updateWorldCup(updateData: object, worldCupYear: number): Promise<object | undefined> {
    try {
      const updatedWorldCup = await worldCupModel.updateWorldCup(updateData, worldCupYear);
      return updatedWorldCup;
    } catch (error) {
      console.log(error);
    }
  }

  public async deleteWorldCup(year: number): Promise<object | undefined> {
    try {
      const deletedWorldCup = await worldCupModel.deleteWorldCup(year);
      return deletedWorldCup;
    } catch (error) {
      console.log(error);
    }
  }

  public async getWorldCupByRunnerUp(runnerUp: string): Promise<object | undefined> {
    try {
      const worldCups = await worldCupModel.getWorldCupByRunnerUp(runnerUp);
      return worldCups;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new WorldCupService();
