import {createContext} from 'react';
export const QuestionContext = createContext<any>('str');
export const Score = createContext<any>(0);
export const Quizcategory = createContext<any>(0);
export const ShowResult = createContext<any>(false)
export const RequestApi = createContext<any>(false)