import { Badge, Stack, Text, Tooltip } from '@chakra-ui/react';

interface IProps {
  skills: string[];
  shortVersion?: boolean;
}

const colorSchemes = [
  'teal',
  'blue',
  'green',
  'red',
  'pink',
  'purple',
  'yellow',
  'cyan',
  'orange',
];

export const SkillPill = ({ skills, shortVersion = false }: IProps) => {
  const getRandomColorScheme = () => {
    const randomIndex = Math.floor(Math.random() * colorSchemes.length);
    return colorSchemes[randomIndex];
  };

  const firstThreeSkills = skills.slice(0, 3);
  const remainingSkills = skills.slice(3);
  const moreLength = remainingSkills.length;

  return (
    <Stack direction="row" pl={'1'} flexWrap="wrap">
      {skills.length > 1 ? (
        <>
          {firstThreeSkills.map((skill, k) => (
            <Badge key={k} colorScheme={getRandomColorScheme()}>
              {skill}
            </Badge>
          ))}
          {shortVersion && remainingSkills.length > 0 ? (
            <Tooltip label={remainingSkills.join(', ')} placement="top">
              <Badge>+{moreLength} more</Badge>
            </Tooltip>
          ) : (
            remainingSkills.map((skill, k) => (
              <Badge key={k} colorScheme={getRandomColorScheme()}>
                {skill}
              </Badge>
            ))
          )}
        </>
      ) : (
        <Text>-</Text>
      )}
    </Stack>
  );
};
