# Pino Lambda Transport

## Overview

Pino Lambda Transport is a custom transport module for Pino Logger v7+, optimized for AWS Lambda environments using 'pino-lambda' (https://github.com/FormidableLabs/pino-lambda). It's important to note that, due to the worker thread nature of Pino transports in v7+, the current version does **not** support integration with lambdaRequestTracker using the global pino lambda storage context. This limitation is an inherent characteristics of worker threads, which are unable to access the global context object of the main thread.
