import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Switch,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

export const Title = ({title}: {title: string}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={{flex: 1}}>
        <Text style={{color: 'white', fontSize: 25}}>---</Text>
      </TouchableOpacity>
      <Text
        style={{flex: 6, textAlign: 'center', color: 'white', fontSize: 25}}>
        {title}
      </Text>
      <View style={{flex: 1}}></View>
    </View>
  );
};

export const Box = ({link, title}: {link: string; title: string}) => {
  const [text, setText] = useState('');

  return (
    <>
      <View style={styles.boder}>
        <Text style={{color: 'white', fontSize: 25}}>C</Text>
        <TextInput
          placeholder={title}
          placeholderTextColor={'white'}
          style={{
            color: 'white',
            fontSize: 25,
            marginLeft: 20,
            opacity: text ? 1 : 0.5,
          }}
          onChangeText={setText}
          value={text}
        />
      </View>
      <View style={styles.divider} />
    </>
  );
};

export const Button = ({
  title,
  onPress,
}: {
  title: string;
  onPress?: () => void;
}) => {
  return (
    <TouchableOpacity style={styles.box} onPress={onPress}>
      <Text
        style={{
          textAlign: 'center',
          alignSelf: 'center',
          fontSize: 20,
          color: '#000000',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export const Footer = ({title}: {title: string}) => {
  return (
    <View style={styles.footer}>
      <Text style={{color: 'white', fontSize: 14, textAlign: 'center'}}>
        {title}
      </Text>
    </View>
  );
};

const CountdownTimer: React.FC<{durationInSeconds: number}> = ({
  durationInSeconds,
}) => {
  const [timeLeft, setTimeLeft] = useState(durationInSeconds);
  const [showResend, setShowResend] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        setShowResend(true);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleResendOTP = () => {
    console.log('Gửi lại mã OTP mới');
    setTimeLeft(durationInSeconds);
    setShowResend(false);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <View style={{alignItems: 'flex-end', paddingRight: 10}}>
      {!showResend ? (
        <Text style={styles.timerText}>{formatTime(timeLeft)}</Text>
      ) : (
        <TouchableOpacity onPress={handleResendOTP}>
          <Text style={styles.timerText}>Gửi lại mã OTP mới?</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export function Signin() {
  const [isRemember, set] = useState(true);
  return (
    <View style={styles.container}>
      <Title title="Sign in"></Title>
      <View style={styles.body}>
        <Box link="" title="Phone number"></Box>
        <Box link="" title="Password"></Box>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Switch
              thumbColor={'#FCC435'}
              trackColor={{false: 'white', true: '#FCC435'}}
              value={isRemember}
              onChange={() => set(!isRemember)}></Switch>
            <TouchableOpacity onPress={() => set(!isRemember)}>
              <Text style={{color: 'white', fontSize: 16}}>Remember me</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Text style={{color: 'white', fontSize: 16}}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <Button title="Continue" />
      </View>
      <Footer title="By sign in or sign up, you argee to our Terms of Service and Privacy Policy"></Footer>
      <StatusBar backgroundColor="black" barStyle="light-content" />
    </View>
  );
}

export function Signup() {
  return (
    <View style={styles.container}>
      <Title title="Sign up"></Title>
      <View style={styles.body}>
        <Box link="" title="Email"></Box>
        <Box link="" title="Phone number"></Box>
        <Box link="" title="Password"></Box>
        <Box link="" title="Confirm password"></Box>
        <Button title="Continue" />
      </View>
      <Footer title="By sign in or sign up, you argee to our Terms of Service and Privacy Policy"></Footer>
      <StatusBar backgroundColor="black" barStyle="light-content" />
    </View>
  );
}
export function Username() {
  return (
    <View style={styles.container}>
      <Title title=""></Title>
      <View style={styles.body}>
        <Text style={{fontSize: 30, color: '#FCC435'}}>Enter Username</Text>
        <Text style={{fontSize: 15, color: '#FFFFFF'}}>
          Latin characters, no emoji/symbols
        </Text>
        <Box link="" title="Username" />
      </View>
      <Button title="Done" />
      <View style={{paddingTop: 20}} />
    </View>
  );
}

export function Forgotpassword() {
  return (
    <View style={styles.container}>
      <Title title="Reset password"></Title>
      <View style={styles.body}>
        <Box link="" title="Phone number"></Box>
        <Box link="" title="New password"></Box>
        <Box link="" title="Confirm new password"></Box>
      </View>
      <Button title="Continue" />
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View style={{paddingTop: 20}} />
    </View>
  );
}

export function ConfirmOTP(): JSX.Element {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(''));
  const inputs = useRef<TextInput[]>(Array(6).fill(null));

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
    if (value.length > 0 && index < 6) {
      inputs.current[index + 1]?.focus();
    }
  };
  const handleFocus = (index: number) => {
    if (otp.every(character => character === '')) {
      inputs.current[0]?.focus();
    }
  };
  const handleBackspace = (index: number) => {
    if (otp[index] === '') {
      if (index > 0) {
        inputs.current[index - 1]?.focus();
      }
    }
  };

  const handleSubmit = () => {
    const enteredOTP = otp.join('');
    if (enteredOTP.length === 6) {
      console.log('OTP:', enteredOTP);
    } else {
      console.log('Vui lòng nhập đủ 6 ký tự');
    }
  };

  return (
    <View style={styles.container}>
      <Title title=""></Title>

      <View style={styles.body}>
        <Text style={{fontSize: 30, color: '#FCC435'}}>Confirm OTP code</Text>
        <Text style={{fontSize: 15, color: '#FFFFFF'}}>
          You just need to enter the OTP sent to the registered phone number
          (704) 555-0127.{' '}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 10,
            justifyContent: 'space-between',
            marginTop: 48,
          }}>
          {otp.map((value, index) => (
            <TextInput
              key={index}
              ref={ref => (inputs.current[index] = ref as TextInput)}
              style={{
                borderWidth: 2,
                borderColor: '#FCC435',
                backgroundColor: '#271D08',
                padding: 10,
                marginRight: 10,
                width: 52,
                height: 72,
                textAlign: 'center',
                color: '#F2F2F2',
                borderRadius: 8,
                fontSize: 32,
                fontWeight: '700',
              }}
              keyboardType="numeric"
              maxLength={1}
              value={value}
              onChangeText={text => handleChange(index, text)}
              onFocus={() => handleFocus(index)}
              onKeyPress={({nativeEvent}) => {
                if (nativeEvent.key === 'Backspace') {
                  handleBackspace(index);
                }
              }}
            />
          ))}
        </View>
        <CountdownTimer durationInSeconds={10}></CountdownTimer>
      </View>
      <View>
        <Button title="Continue" onPress={handleSubmit}></Button>
        <View style={{marginTop: 16}} />
      </View>
      <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: 'black',
  },
  header: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'row',
  },
  body: {
    flex: 8,
    flexDirection: 'column',
    gap: 15,
  },
  boder: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  divider: {
    height: 1,
    backgroundColor: 'gray',
  },
  footer: {
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: 'center',
  },
  box: {
    backgroundColor: '#FCC435',
    borderRadius: 64,
    borderWidth: 1,
    height: 50,
    marginTop: 20,
    paddingTop: 10,
  },
  timerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F2F2F2',
  },
});
