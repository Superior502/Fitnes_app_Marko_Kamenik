
import { View, Text, StyleSheet, Button, ScrollView, Image } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [stran, setStran] = useState(0);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Predstavitev Fitnesa</Text>

      <View style={styles.menu}>
        <Button title="Domov" onPress={() => setStran(0)} />
        <Button title="Fitnes" onPress={() => setStran(1)} />
        <Button title="O meni" onPress={() => setStran(2)} />
      </View>

      {stran === 0 && (
        <View>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800' }}
            style={styles.slika}
          />
          <Text style={styles.heading}>Dobrodošel!</Text>
          <Text style={styles.text}>
            Fitnes je moj hobi. V aplikaciji predstavljam svoj način
            treniranja, najljubše vaje in cilje.
          </Text>
        </View>
      )}

      {stran === 1 && (
        <View>
          <Text style={styles.heading}>Moj način treniranja</Text>

          <Text style={styles.text}>
            Pri treningu uporabljam split anterior/posterior.
            To pomeni, da treninge razdelim na sprednjo in zadnjo
            stran telesa. Tako lažje razporedim vaje za različne mišice.
          </Text>
          <Image
            source={{ uri: 'https://www.ironmanmagazine.com/wp-content/uploads/PB21251-e1445437804121.jpg' }}
            style={styles.slika}
          />
          <Text style={styles.heading}>Progressive overload</Text>
          <Text style={styles.text}>
            Pri treningu uporabljam metodo progressive overload.
            To pomeni, da poskušam sčasoma povečati težo, število
            ponovitev ali izboljšati tehniko izvedbe vaj.
          </Text>

          <Text style={styles.heading}>Frekvenca treningov</Text>
          <Text style={styles.text}>
            Moj cilj je posamezno mišično skupino trenirati približno
            trikrat na teden. Pri tem sta pomembna tudi počitek
            in pravilna izvedba vaj.
          </Text>

          <Text style={styles.heading}>Najljubši vaji (prsa)</Text>
          <Image
            source={{ uri: 'https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F8urtyqugdt2l%2Fu0eSNSBQ4NR8KoCApJSbB%2F621aba71c88d0332beaf8f08a2f59fb3%2FDavid_laid_desktop.jpg&w=3840&q=85' }}
            style={styles.slika}
          />
          <Text style={styles.text}>
            1. Incline Chest Press – vaja za zgornji del prsnih mišic,
            pri kateri potiskam uteži na poševni klopi oziroma napravi.
          </Text>
          <Text style={styles.text}>
            2. Pec Deck – vaja na napravi, pri kateri roke približujem
            pred telesom in tako obremenjujem spodnji in srednji del prsnih mišic.
          </Text>

          <Text style={styles.heading}>Moj glavni cilj</Text>
          <Text style={styles.text}>
            Moj glavni cilj je estetski izgled, predvsem razvoj
            mišične mase in skladne postave.
          </Text>

          <Text style={styles.heading}>Motivacija</Text>
          <Text style={styles.text}>
            Navdih za treninge mi dajejo fitnes ustvarjalci,
            kot je Jon Skywalker.
          </Text>
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUap-hvUi_bnVck4xbPlOcjCFe7wsT9FrImgxmYuvNFjfWXE8YzLhtBbg&s=10' }}
            style={styles.slika}
          />
        </View>
      )}

      {stran === 2 && (
        <View>
          <Text style={styles.heading}>O meni</Text>
          <Text style={styles.text}>
            Ime mi je Marko Kamenik, sem dijak 3. letnika računalniške šole in sem star 17 let. V fitnes hodim že približno eno leto in vidim veliko napredka. Rad treniram, ohranjam zdrav način življenja in spremljam
            svoj napredek.
          </Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    padding: 20,
  },
  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  menu: {
    gap: 8,
    marginBottom: 25,
  },
  heading: {
    color: 'white',
    fontSize: 23,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    color: 'lightgray',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
  },
  slika: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
});
