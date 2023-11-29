export class StudentInfo {
  public voornaam;
  public familienaam;
  public tutor;
  public leerjaar;
  public niveaus;
  public days;

  constructor(
    voorNaam: string,
    familieNaam: string,
    tutorNaam: string,
    leerJaar: number,
    niveau: string,
    dag: any
  ) {
    this.voornaam = voorNaam;
    this.familienaam = familieNaam;
    this.tutor = tutorNaam;
    this.leerjaar = leerJaar;
    this.niveaus = niveau;
    this.days = dag;
  }
}
