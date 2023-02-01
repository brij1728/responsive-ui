export interface RandomNumberProps {
  min: number;
  max: number;
}
export const RandomNumber = ({ min, max }: RandomNumberProps) => {
  const getRandomNumber = ` ${Math.random()}* (${max} - ${min}+ ${1} )}+ ${min}`;
  return getRandomNumber;
};
