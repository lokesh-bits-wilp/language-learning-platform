export class ConfigurationManager {
  private configurationDetails: any;
  constructor(isReadFromEnv: boolean = false) {
    if (isReadFromEnv) {
      require("dotenv").config();
    }
    this.configurationDetails = Object.assign(
      {},
      require("./env.common").default
    );
  }

  getConfigurationDetails(): any {
    return this.configurationDetails;
  }
}
