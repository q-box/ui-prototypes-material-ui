class Exam {
  constructor(title = "", subtitle = "", media = "", description = "") {
    this.title = title;
    this.subtitle = subtitle;
    this.media = media;
    this.description = description;
  }

  static getAll = () => {
    return [
      new Exam(
        "Física clássica",
        "Introdução a física clássica",
        "fisica-classica.jpg"
      ),
      new Exam(
        "Física ondas",
        "Introdução a física ondas",
        "fisica-ondas.png",
        "Texto explicativo aqui sobre a lista de exercício de física de ondas :P"
      ),
      new Exam(
        "Física mecânica",
        "Introdução a física mecânica",
        "fisica-mecanica.jpg",
        "Texto explicativo aqui da lista de exercício :P"
      )
    ];
  };
}

export default Exam;
