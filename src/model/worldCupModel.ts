import WorldCup, { IWorldCup } from '../Schemas/worldCup';

class WorldCupModel {
  public async getWorldCups(): Promise<IWorldCup[] | undefined> {
    try {
      const worldCups = await WorldCup.find();
      return worldCups;
    } catch (error) {
      console.log(error);
    } 
  }

  public async getWorldCupByYear(year: number): Promise<IWorldCup[] | undefined> {
    try {
      const worldCup = await WorldCup.find({ year });
      return worldCup;
    } catch (error) {
      console.log(error);
    }
  }

  public async insertWorldCup(worldCupData: IWorldCup): Promise<IWorldCup | unknown> {
    try {
      const worldCup = await WorldCup.create(worldCupData);
      console.log(worldCup);
      return worldCup;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  public async updateWorldCup(updateData: object, worldCupYear: number): Promise<object | undefined> {
    try {
      const updatedWorldCup = await WorldCup.updateOne({ year: worldCupYear }, { ...updateData });
      return updatedWorldCup;
    } catch (error) {
      console.log(error);
    }
  }

  public async deleteWorldCup(year: number): Promise<object | undefined> {
    try {
      const deletedWorldCup = await WorldCup.deleteOne({ year });
      return deletedWorldCup;
    } catch (error) {
      console.log(error);
    }
  }

  public async getWorldCupByRunnerUp(runnerUp: string): Promise<object | undefined> {
    try {
      const worldCups = await WorldCup.find({ runnerUp });
      console.log(worldCups);
      return worldCups;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new WorldCupModel();