import axios from 'axios';

const baseUrl = "https://flybox-education.herokuapp.com/";

/**
 * @method: POST
 * @protected: No
 * @public : Token base
 * @access: Admin Only
 * @description: To be able to get necessary information regarding the services offered
 * @author: Olubusola 
 * Contact Form for enquiries
 */
export const httpPostWithNoToken = async (url, fd) => {
  console.log(fd)
  return new Promise((resolve, reject) => {
    axios
      .post(`${baseUrl}${url}`, fd, {
        // headers: { Authorization: `${localStorage.api_token}` },
      })
      .then(({ data }) => {
        let res = data.response ? data.response : data
        console.log(res.data)
        return resolve(res);
      })
      .catch((error) => {
        console.log("here>>", error.response, error.response.data);
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


