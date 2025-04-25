# Code Analysis Tool

A utility for scanning, processing, and analyzing Java files using OpenAI's language models.

## Project Overview

This tool scans a directory for Java files, processes their content by breaking it into manageable chunks, sends these chunks to OpenAI's API for analysis, and saves the results in JSON format. It's designed to help developers analyze large codebases efficiently.

## Project Structure

```
.
├── index.js                  # Main entry point that orchestrates the entire workflow
├── utils/
│   ├── readAllFiles.js       # Handles scanning directories for Java files
│   ├── chunkText.js          # Splits large files into LLM-compatible chunks
│   ├── langChainUtils.js     # Contains the OpenAI API integration
│   └── saveToJSON.js         # Manages saving results to JSON format
```

## Core Components

### index.js

The main file that coordinates the workflow:
- Initializes the scanning process
- Manages file chunking
- Orchestrates API requests
- Handles saving the final output

### utils/readAllFiles.js

Responsible for:
- Traversing the directory structure starting from the root folder
- Identifying and collecting Java files (.java extension)
- Reading file contents for further processing

### utils/chunkText.js

Handles:
- Breaking down large text files into smaller chunks that fit within the LLM context window
- Ensuring chunks maintain logical coherence where possible
- Managing chunk overlap for context preservation

### utils/langChainUtils.js

Contains:
- `getResponseFromOpenAi` function that sends prompts to OpenAI
- Handles API authentication and communication
- Processes and formats API responses

### utils/saveToJSON.js

Manages:
- Converting analysis results into structured JSON format

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- OpenAI API key

### Installation

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Configure your OpenAI API key (create a `.env` file or set environment variables)

### Usage

Run the tool from the command line:

```
node index.js
```

The analysis results will be saved to a JSON file in the current directory named result.json

## Configuration

You can configure the tool by modifying the following parameters:
- Chunk size for text processing
- OpenAI model selection
- Output file format and location