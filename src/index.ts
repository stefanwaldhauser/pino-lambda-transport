import {StructuredLogFormatter, pinoLambdaDestination} from "pino-lambda";

export interface PinoLambdaTransportOptions {
  useStructuredLogFormatter: boolean;
}

export default async (
  {useStructuredLogFormatter}: PinoLambdaTransportOptions = {
    useStructuredLogFormatter: false,
  },
) => {
  if (useStructuredLogFormatter) {
    return pinoLambdaDestination({
      formatter: new StructuredLogFormatter(),
    });
  } else {
    return pinoLambdaDestination();
  }
};
