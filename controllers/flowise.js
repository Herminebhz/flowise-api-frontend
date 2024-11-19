export const createPrediction = async (req, res) => {
  const { message } = req.body;
  console.log(message);

  try {
    // Call the Flowise API endpoint here..
    const flowiseData = {
      question: message,
    };

    // Call the Flowise Endpoint
    const response = await fetch(
      'http://localhost:3000/api/v1/prediction/e7edc0b8-b25c-4cac-9061-9ea87a5e4c54',
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(flowiseData),
      }
    );

    const data = await response.json();

    res.status(200).json({ message: data.text });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
