import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Switch,
} from 'react-native';
import React, {useState} from 'react';

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

export const Button = ({title}: {title: string}) => {
  return (
    <TouchableOpacity style={styles.box}>
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
});
