import React from 'react';
import {View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';

const PhaseModal = ({ isModalVisible, setModalVisible, phaseTitle }) => {
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
                <Text style={styles.modalText}>{phaseTitle}</Text>
                <Text style={styles.phaseParams}> phase timeline | Phase Value</Text>
                <Text style={{alignSelf:'flex-start',fontSize:22,color:'white',marginLeft:40}}>Description</Text>
                <Text style={styles.phaseDescription}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,</Text>
          </View>
          <TouchableOpacity
              style={styles.buttonClose}
              onPress={() => setModalVisible(!isModalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
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
        color:'grey',
        fontSize:16,
        marginTop:20,
        marginBottom:20
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
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center",
        color:'white',
        fontSize:35
      },
      buttonClose: {
        backgroundColor: "#2196F3",
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
});

export default PhaseModal;
