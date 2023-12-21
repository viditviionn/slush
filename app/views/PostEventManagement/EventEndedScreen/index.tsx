import React, {useState} from 'react';
import EventEndedView from './components/EventEndedView';

const EventEndedScreen = () => {
  const [dummyArray, setdummyArray] = useState([
    {text: 'Did not have much in common', id: 1, isSelected: false},
    {text: 'Nudity / inappropriate', id: 2, isSelected: false},
    {text: 'Swearing / Aggression', id: 3, isSelected: false},
    {text: 'I have joined the wrong event', id: 4, isSelected: false},
    {text: 'I left the video-call by accident', id: 5, isSelected: false},
    {text: 'I left the video-call by accident', id: 6, isSelected: false},
  ]);
  const handleOptionPress = (data: any) => {
    const final = dummyArray.map(item => {
      return {
        ...item,
        isSelected: item.id === data?.id,
      };
    });
    setdummyArray(final);
  };
  return (
    <EventEndedView
      handleOptionPress={handleOptionPress}
      optionArray={dummyArray}
    />
  );
};

export default EventEndedScreen;
