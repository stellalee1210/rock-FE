export class User {
  #userId;
  #userDisplayName;
  #isStudying;
  #yymmdd;
  #studyTimeSec;
  constructor(data) {
    this.#userDisplayName = data.userDisplayName;
    this.#userId = data.userId;
    this.#isStudying = true;
    this.#yymmdd = this.#getDate();
    this.#studyTimeSec = 0;
  }

  #getDate() {
    const today = new Date();
    const year = today.getFullYear() % 100;
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const date = today.getDate();
    return `${year}${month}${date}`;
  }
}
