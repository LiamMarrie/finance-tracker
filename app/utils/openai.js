import { OpenAI } from "openai";
import * as dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

//create assistant 
const createAssistant = async ({name, instructions, fileID}) => {
    const assistant = await openai.beta.assistants.create({
        name: name,
        instructions: instructions,
        tools: [{type: "text"}],
        model: 'gpt-3.5-turbo-16k',
        file_ids: fileId && [fileId],
    });

    return assistant;
};

//run assistant
const runAssistant = async ({assistantID, prompt}) => {
    const response = await openai.beta.assistants.complete({
        assistantId: assistantID,
        prompt: prompt,
        max_tokens: 150,
        stop: ["\n", "Human:", "AI:"],
    });

    return response;
}; 

// get thread
const getThread = async ({assistantID, threadID}) => {
    const thread = await openai.beta.assistants.retrieve({
        assistantId: assistantID,
        id: threadID,
    });

    return thread;
};