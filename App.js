import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react/cjs/react.development"; 
import { ref, uploadBytes} from "firebase/storage";
import { storage } from "./components/config";


export default function App() {

  const[image, setImage]   = useState('');


  const submitData= () => { 
    
    const storageRef = ref(storage, 'image');
    
    // 'file' comes from the Blob or File API
    uploadBytes(storageRef, image).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    }). catch((error)=>
    {
      console.log(error.message);
    });

  }

  const handleChange = (e) => {
    if(e.target.files[0]){
        setImage(e.target.files[0])
    }
  }
  return (
   <View style={styles.container}>
   <Text> Ppen up App. is to start working on your app! </Text>
  <StatusBar stvle="auto" />

  <input type="file" onChange={handleChange}/>
  <button onClick={submitData}> Upload </button>
  </View>
  );
  }

  const styles = StyleSheet.create( {
    container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifycontent: 'center',
    },
  });


