const encoderSolution = (raw, encoder) => {
  // TODO
    
    for (let i = 0; i < raw.length; i++) {
      for (let j = 0; i < encoder.length; j++) {
        if (raw[i]) {
          return raw.replace(i, j);
        }
      }
    }
    return console.log(raw)
};

module.exports = {
  encoderSolution
};
