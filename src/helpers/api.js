import axios from 'axios';

const baseUrl = "https://flybox-education.herokuapp.com/";
// const token = localStorage.getItem("token");

/**
 * @method: POST
 * @protected: Contact Us
 * @public : Token base
 * @access: Admin Only
 * @description: To be able to get necessary information regarding the services offered
 * @author: Olubusola 
 * Contact Form for enquiries
 */
export const httpPostWithNoToken = async (url, fd) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${baseUrl}${url}`, fd, {
        // headers: { Authorization: `${localStorage.api_token}` },
      })
      .then(({ data }) => {
        return resolve(data.response);
      })
      .catch((error) => {
        console.log("here>>", error.response, error.response.data);
        // console.log(error.response)
        // console.log(error.response.data.status)
        let error_msg = {
          // message: "Something went wrong. Please check and make sure everything is okay and try again",
          message: error.response.data
        };
        if (
          error &&
          error.response &&
          error.response.data &&
          error.response.data.response
        ) {
          error_msg = {
            message: Array.isArray(error.response.data.response.message)
              ? error.response.data.response.message[0]
              : error.response.data.response.message,
          };
        }
        return reject(error_msg);
      });
  });
};
