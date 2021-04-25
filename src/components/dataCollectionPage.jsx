import React from 'react';
import Button from "@material-ui/core/Button";

const ZIPCODE_URL = "https://www.zipcodeapi.com/rest/"
const ZIPCODE_KEY = "lgPfA4rtwypjiXUlGZCkBeqcjkEitH65fetoBvU0Bri3zQd1lVUu7qdFKu6eHwR9"


export class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  handleClick = () => {
    console.log("handle clicked");
    console.log(this.getDistance('95014','95131'))
    this.setState({
    });
  };

  //www.zipcodeapi.com/rest/<api_key>/distance.<format>/<zip_code1>/<zip_code2>/<units>



  getDistance = (startZipCode,endZipCode) => {
      try {
        fetch(
            `/carbonContent?startZipCode=${startZipCode}&endZipCode=${endZipCode}/mile`
        )
        .then((response) => {
            return response.json();
        })
        .then((jsonResp) => {
            return jsonResp.distance
        })

      }catch (err) {
        console.log(err)
      }
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
          <div>
            <Button variant="contained" onClick={() => this.handleClick()}>
              Submit
            </Button>
          </div>
      </div>
    );
  }
}
