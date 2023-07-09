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

  let firstThreeSkills;
  let remainingSkills;
  let moreLength;

  if (skills !== null) {
    firstThreeSkills = skills.slice(0, 3);
    remainingSkills = skills.slice(3);
    moreLength = remainingSkills.length;
  }

  return (
    <Stack direction="row" pl={'1'} flexWrap="wrap">
      {skills !== null ? (
        <>
          {firstThreeSkills?.map((skill, k) => (
            <Badge key={k} colorScheme={getRandomColorScheme()}>
              {skill}
            </Badge>
          ))}
          {shortVersion && remainingSkills && remainingSkills.length > 0 ? (
            <Tooltip label={remainingSkills?.join(', ')} placement="top">
              <Badge>+{moreLength} more</Badge>
            </Tooltip>
          ) : (
            remainingSkills?.map((skill, k) => (
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
