import axios from 'axios';

const baseUrl = "https://flybox-education.herokuapp.com/";

/**
 * @method: POST
 * @protected: No
 * @public : No Token base
 * @access: Admin Only
 * @description: To be able to get necessary information regarding the services offered
 * @author: Olubusola - Backend Dev
 * Contact Form for enquiries
 */
export const httpPostWithNoToken = async (url, fd) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${baseUrl}${url}`, fd, {
        // headers: { Authorization: `${localStorage.api_token}` },
      })
      .then(({ data }) => {
        let res = data ? data.message : data.message
        return resolve(res);
      })
      .catch((error) => {
        // console.log("here>>", error.response, error.response.data);
        let error_msg = {
          // message: "Something went wrong. Please check and make sure everything is okay and try again",
          message: error.response.data && error.response.data.message && error.response.data.message
        };
       
        // console.log(error_msg, "Gets here")
        return reject(error_msg);

      });
  });
};


