const colors = {
  red: "\x1b[31m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",
  green: "\x1b[32m",
  reset: "\x1B[0m",
};

const LEVEL = {
  ERROR: "ERROR",
  INFO: "INFO",
  DEBUG: "DEBUG",
  TRACE: "TRACE",
};

const log = (message, level, err) => {
  let levelText;
  let finalMessage = `${new Date().toTimeString()} :: ${message} `;
  switch (level) {
    case LEVEL.INFO:
      levelText = `[${colors.cyan}${level}${colors.reset}] `;
      break;
    case LEVEL.DEBUG:
      levelText = `[${colors.green}${level}${colors.reset}] `;
      break;
    case LEVEL.ERROR:
      levelText = `[${colors.red}${level}${colors.reset}] `;
      finalMessage = finalMessage.slice(0, finalMessage.lastIndexOf("\r"));
      finalMessage = finalMessage.concat(` :: ${err?.stack}`);
      break;
    case LEVEL.TRACE:
      levelText = `[${colors.white}${level}${colors.white}] `;
      break;
    default: {
      const error = new Error("Invalid log level");
      levelText = `[${colors.red}${level}${colors.reset}] `;
      finalMessage = finalMessage.concat(`:: ${error?.message}`);
      finalMessage = finalMessage.concat(`:: ${error?.stack}`);
    }
  }
  finalMessage = levelText + finalMessage;
  console.log(finalMessage);
};

module.exports = log;
