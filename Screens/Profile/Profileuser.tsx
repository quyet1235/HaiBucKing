import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const CountdownTimer: React.FC<{durationInSeconds: number}> = ({
  durationInSeconds,
}) => {
  const [timeLeft, setTimeLeft] = useState(durationInSeconds);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  // Chuyển đổi thời gian còn lại thành định dạng phút:giây
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <Text style={styles.timerText}>Remaining time: {formatTime(timeLeft)}</Text>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerContainer: {
    backgroundColor: '#FCC435',
    padding: 10,
    borderRadius: 5,
  },
  timerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
});
