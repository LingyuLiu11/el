import { Environment, Network, RecordSource, Store } from "relay-runtime";

const fetchQuery = async (request, variables) => {
  const body = JSON.stringify({
    query: request.text,
    variables,
  });

  const headers = {
    Accept: "application/json",
    "Content-type": "application/json",
    "X-Parse-Application-Id": "tVmwKuouk2tVvnYSRPcSAUEnslwoTddNJP4A9cs8",
    "X-Parse-Master-Key": "3mRFWdQmA0RTD7qV971fk3jNEAOyc9qz8dUtMhpt",
    "X-Parse-Client-Key": "xE7dG6JQSjCxinNVDy5GWFWsqlX7YK5Fy9Nl7RUj",
  };

  try {
    const response = await fetch(`https://parseapi.back4app.com/graphql`, {
      method: "POST",
      headers,
      body,
    });

    const data = await response.json();

    if (data.errors) {
      throw data.errors;
    }

    return data;
  } catch (err) {
    console.log("err on fetch graphql", err);

    throw err;
  }
};

const environment = new Environment({
    network: Network.create(fetchQuery),
    store: new Store(new RecordSource()),
  });
  
  export default environment;