import { model as createModel } from 'mongoose';
import { WorldCupSchema, IWorldCup } from '../Schemas/worldCup';

class WorldCupModel {
  constructor(private worldCupModel = createModel<IWorldCup>(
    'tournaments',
    WorldCupSchema,
  )) {}

  public async getWorldCups(): Promise<IWorldCup[] | undefined> {
    try {
      const worldCups = await this.worldCupModel.find();
      return worldCups;
    } catch (error) {
      console.log(error);
    } 
  }

  public async getWorldCupByYear(
    year: number,
  ): Promise<IWorldCup[] | undefined> {
    try {
      const worldCup = await this.worldCupModel.find({ year });
      return worldCup;
    } catch (error) {
      console.log(error);
    }
  }

  public async insertWorldCup(
    worldCupData: IWorldCup,
  ): Promise<IWorldCup | unknown> {
    try {
      const worldCup = await this.worldCupModel.create(worldCupData);
      return worldCup;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  public async updateWorldCup(
    updateData: object,
    worldCupYear: number,
  ): Promise<object | undefined> {
    try {
      const updatedWorldCup = await this
        .worldCupModel.updateOne({ year: worldCupYear }, { ...updateData });
      return updatedWorldCup;
    } catch (error) {
      console.log(error);
    }
  }

  public async deleteWorldCup(year: number): Promise<object | undefined> {
    try {
      const deletedWorldCup = await this.worldCupModel.deleteOne({ year });
      return deletedWorldCup;
    } catch (error) {
      console.log(error);
    }
  }

  public async getWorldCupByRunnerUp(
    runnerUp: string,
  ): Promise<object | undefined> {
    try {
      const worldCups = await this.worldCupModel.find({ runnerUp });
      console.log(worldCups);
      return worldCups;
    } catch (error) {
      console.log(error);
    }
  }
}

export default WorldCupModel;