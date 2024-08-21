/**
 * Contains the miscellaneous route handlers.
 * @author Humphrey Ikhalea <https://github.com/humphreydev5>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
