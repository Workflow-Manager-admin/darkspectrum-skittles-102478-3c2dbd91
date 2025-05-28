#!/bin/bash
cd /home/kavia/workspace/code-generation/darkspectrum-skittles-102478-3c2dbd91/dark_spectrum_skittles
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

