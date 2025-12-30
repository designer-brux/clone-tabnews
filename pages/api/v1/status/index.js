function status(request, response) {
  response.status(200).json({ chave: "Ticket" });
}

export default status;
