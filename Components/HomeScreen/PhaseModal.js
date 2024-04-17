import React from 'react';
import {View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';

const PhaseModal = ({ isModalVisible, setModalVisible, phaseCard }) => {
  return (
    <Modal
        animationType="slide"
        transparent={false}
        visible={isModalVisible}
        onRequestClose={() => {
          setModalVisible(!isModalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
                <Text style={styles.modalText}>{phaseCard.phaseTitle}</Text>
                <Text style={styles.phaseParams}> {phaseCard.phaseTimeline} | {phaseCard.phaseValue}</Text>
                <Text style={{alignSelf:'flex-start',fontSize:22,color:'white',marginLeft:40, fontFamily:'Poppins-Medium'}}>Description</Text>
                <Text style={styles.phaseDescription}>{phaseCard.phaseDescription}</Text>
          </View>
          <TouchableOpacity
              style={styles.buttonClose}
              onPress={() => setModalVisible(!isModalVisible)}
            >
              <Text style={styles.textStyle}>Back</Text>
            </TouchableOpacity>
        </View>
      </Modal>
  );
};

const styles = StyleSheet.create({
    centeredView: {
        flex:1,
        backgroundColor: "#202020",
        justifyContent:'center',
        alignItems:'center'
      },
      modalView: {
        marginTop: 55,
        flex:0.8,
        borderRadius: 10,
        padding: 35,
        alignItems: "center",
        shadowColor: "#171717",
        shadowOffset: {
          width: 6,
          height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        width: '100%',
        height: '70%'
      },
      phaseParams:{
        color:'white',
        fontFamily: 'Poppins-Medium',
        backgroundColor: '#57409D',
        fontSize:16,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        marginTop:10,
        marginBottom:20,
    },
    phaseDescription:{
        color:'grey',
        fontSize:16,
        textAlign:'justify',
        paddingLeft:40,
        paddingRight:40,
        paddingTop:10
    },
      buttonClose: {
        backgroundColor: "#57409D",
        borderRadius: 20,
        padding: 20,
        elevation: 2,
        width:20
      },
      textStyle: {
        color: "white",
        fontFamily: 'Poppins',
        textAlign: "center"
      },
      modalText: {
        marginBottom: 5,
        textAlign: "center",
        color:'white',
        fontFamily: 'Poppins',
        fontSize:38,
      },
      buttonClose: {
        backgroundColor: "#57409D",
        borderRadius: 20,
        paddingLeft: 20,
        paddingRight:20,
        paddingTop: 10,
        paddingBottom: 10,
        elevation: 2
      },
});

export default PhaseModal;
