import axios from "axios";

const params = {
    headers: {
        Authorization: "bearer " + "ee1a6aae2d266a36906b8a67968a2e11b1d33857a0ee8026c213d5fcf5f8cbeb69d07827504e64deeadcbe77080c8d5068c3d533de8ef4dcf2e489633d13fe1b99da369c396490fc5a8d4a53b1f8583aebdc2039e1f83c032513b866c963bea92667aadebe53d885c3ff3dbc0c3c2142e21566c342adf7cf4b8777232a87a700",
    },
};

export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get(
            "http://localhost:1337" + url,
            params
        );
        console.log(data)
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};

export const makePaymentRequest = axios.create({
    baseURL: "http://localhost:1337",
    headers: {
        Authorization: "bearer " + "ee1a6aae2d266a36906b8a67968a2e11b1d33857a0ee8026c213d5fcf5f8cbeb69d07827504e64deeadcbe77080c8d5068c3d533de8ef4dcf2e489633d13fe1b99da369c396490fc5a8d4a53b1f8583aebdc2039e1f83c032513b866c963bea92667aadebe53d885c3ff3dbc0c3c2142e21566c342adf7cf4b8777232a87a700",
    },
});
