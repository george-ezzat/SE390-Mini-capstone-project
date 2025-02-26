import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  searchBarContainer: {
    position: 'absolute',
    top: 20,
    width: '70%',
    left: 20,
    zIndex: 2,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    flexDirection: 'row',
  },
  searchBar: {
    height: 40,
    borderWidth: 0.5,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  map: {
    width: '100%',
    height: '100%', // Slightly reduce map height to accommodate popup
  },
  toggleButtonContainer: {
    position: 'absolute',
    top: 80,
    left: 20,
    zIndex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: 250,
    flexWrap: 'wrap'
  },
  sgwButton: {
    backgroundColor: '#800000', 
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 15,
    width: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
    marginBottom: 3,
    borderWidth: 1,
    borderColor: 'black',
  },
  sgwButtonActive: {
    backgroundColor: 'white', 
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 15,
    width: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    marginRight: 5
  },
  loyolaButton: {
    backgroundColor: '#800000', 
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 15,
    width: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
    borderWidth: 1,
    borderColor: 'black'
  },
  loyolaButtonActive: {
    backgroundColor: 'white', 
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 15,
    width: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    marginRight: 5
  },
  userLocationButton: {
    backgroundColor: '#800000', 
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 15,
    width: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
    borderWidth: 1,
    borderColor: 'black'
  },
  userLocationButtonActive: {
    backgroundColor: 'white', 
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 15,
    width: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    marginRight: 5
  },
  normalText: {
    fontSize: 16,
    color: 'white',
     fontWeight: 'bold'
  },
  highlightedText: {
    fontSize: 16,
    color: 'blue',
    fontWeight: 'bold'
  },
  directionsButton: {
    backgroundColor: '#800000',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginTop: 5,
    alignItems: 'center', 
    flexDirection: 'row',
    width: 'auto',
    borderWidth: 1,
    borderColor: 'black'
  },
  directionsButtonText: {
    color: 'white',
     fontSize: 16,
     fontWeight: 'bold'
 }, 
 routeInfoContainer: {
  zIndex: 1,
  position: 'absolute', 
  bottom: 60, 
  width: '90%',
  flexDirection: 'row', 
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#800000',
  padding: 10,
  borderRadius: 10,
  borderColor: 'black',
  borderWidth: 0.5,
},
routeInfoText: {
  fontSize: 16,
  fontWeight: 'medium',
  color: 'white',
},
buttonImage: {
  width: 20,
  height: 20,
},
modeContainer: {
  position: 'absolute',
  bottom: 40, // Places it right above the directions button
  left: '50%',
  transform: [{ translateX: -110 }], // Centers the container
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 20,
  paddingHorizontal: 10,
  paddingVertical: 5,
  width: 220, // Adjust the width of the container
  marginBottom: 60,
},
modeButton: { 
  zIndex: 1,
  marginHorizontal: 15,
  backgroundColor: '#800000',
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 20,
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 0.5,
  borderColor: 'black',
},
modeText: { 
  fontSize: 16,
  fontWeight: 'medium',
  color: 'white',
},
  directionsBuildingButton: {
    backgroundColor: '#800000',  
    paddingVertical: 10,          
    paddingHorizontal: 10,        
    borderRadius: 50,            
    alignItems: 'center', 
    flexDirection: 'row',
  },
  directionsBuildingButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  searchResultItem: {
    backgroundColor: 'white',
    padding: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  searchResultItemNoBorder: {
    backgroundColor: 'white',
    padding: 10,
  },
  flatListResult: {
    borderRadius: 5
  },
  useCurrentLocationBtn: {
    backgroundColor: '#800000',
    borderRadius: 10,
    paddingVertical: 8,
    marginTop: 5,
    borderWidth: 1,
    borderColor: 'black',
    alignSelf: 'flex-start',
  },
  useCurrentLocationText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    marginHorizontal: 15,
 },
 directionsButtonActive: {
  backgroundColor: 'white', 
  borderRadius: 10,
  paddingVertical: 8,
  paddingHorizontal: 15,
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 1,
  borderColor: 'black',
  marginTop: 5,
  flexDirection: 'row',
  width: 'auto',
 }
});

export default styles;
