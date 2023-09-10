import dayjs from 'dayjs'
import { ReactElement, useEffect, useState } from 'react'
import { Image, StyleSheet, Text } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5e9cd',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textDateTime: {
    fontWeight: 'bold',
    fontSize: 32,
    color: '#FF4444',
    marginBottom: 12
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#4444FF'
  },
  textVersion: {
    marginTop: 12,
    marginBottom: 4,
    fontWeight: 'bold',
    fontSize: 14,
    fontStyle: 'italic',
    color: '#4444FF'
  },
  text: {
    marginTop: 8,
    marginBottom: 8,
    fontSize: 16,
    fontWeight: 'bold'
  },
  logo_img: {
    width: 350,
    height: 350
  }
})

export default function App(): ReactElement {
  const [date, setDate] = useState(dayjs())

  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      setDate(dayjs())
    }, 1000)

    //Clearing the interval
    return () => clearInterval(interval)
  }, [date])

  // const setInterval = () => {
  //   setDate(dayjs()); // dayjs() always gives us the current time
  // };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Image style={styles.logo_img} source={require('./img/LogoTwo.png')} />
        <Text style={styles.textDateTime}>
          {date.format('dddd, DD MMMM')}, {date.format('hh:mm:ss')}
        </Text>
        <Text style={styles.textTitle}>
          This is the first splash screen, We just started working on this app!
        </Text>
        <Text style={styles.text}>By S. P. Mitsis & N. N. Mitsis</Text>
        <Text style={styles.textVersion}>Version 0.0.1 - Alpha</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
