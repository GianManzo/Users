/**
 * criando classes..
 * por padrão toda primeira letra de nome de classe tem que ser Maiuscula
 * Método construtor, quando invocamos a classe
 */
class User {
  constructor(name, gender, birth, country, email, password, photo, admin) {
    //entre()vamos receber aqui o nome de usuario e etc..
    //this serve para se referir a atributos ou metodos da mesma classe
    this.name = name //o que tiver .name vai armazenar no name / = name é a variavel
    this.gender = gender //o que tiver no .gender, vai armazenar no gende e assim por diante
    this.birth = birth
    this.country = country
    this.email = email
    this.password = password
    this.photo = photo
    this.admin = admin
  }
}
