import { LLMModel } from "@/app/adapter/interface"
export const provider = {
  id: 'openai',
  providerName: 'Open AI',
}

export const modelList: LLMModel[] = [
  {
    'name': 'gpt-5-nano',
    'displayName': 'gpt-5-nano',
    provider
  },
  {
    'name': 'gpt-5.2',
    'displayName': 'gpt-5.2',
    provider
  },
  {
    'name': 'gpt-5.2-high',
    'displayName': 'gpt-5.2-high',
    provider
  }
  
]