import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView, AppState} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { variableDeclarator } from '@babel/types';

// export default function glints() 
const glints =() => {
    return (
      <ScrollView>
        <View 
          style={{
            display: 'flex',
            flex: 1,
            margin: 10,
            
          }}>
        <View style={{
            display: 'flex',
            backgroundColor: 'skyblue',
            height: 150,
            margin: 5,
            borderRadius: 10,
        }}>
        <View style={{
          padding: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
            <AntDesign name= "left"
            size= {20}
            color= "white"
            ></AntDesign>
          <Entypo name= "wallet"
            size= {20}
            color= "white"
            
            ></Entypo>
        <Text style= {{
            fontFamily: 'arial',
            fontWeight: 'bold',
            color: 'white',
            fontSize: 20,
            margin: 5,
        }}>Gopay
        </Text>
        </View>
          <Entypo name= "dots-three-horizontal"
            size= {20}
            color= "white"
          ></Entypo>
        </View>
        <View style={{
          padding: 20,
          flexDirection: 'row',
        }}>
        <View style={{
          backgroundColor: 'white',
          width: 50,
          height: 50,
          borderRadius: 25,
          overflow: 'hidden',
           
        }}>
        <Image style={{width:50, height:60,}} source={ require('./vector.png')} />
        </View>
        <View style={{
          flexDirection: 'column',
          marginLeft: 10,
        }}>
        <Text style={{
          fontSize: 20,
          color: 'white',
          fontWeight: 'bold',
        }}>Satria Dafa</Text>
        <Text style= {{
          fontSize: 15,
          color: 'white',
        }}>Tap to See Your Gojek Profile</Text>
        </View>  
        </View>
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 20,
        }}>
        <View style={{
          alignItems: 'center',
        }}>
        <View style={{
          backgroundColor: 'skyblue',
          width: 50,
          height: 50,
          borderRadius: 25,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <MaterialCommunityIcons name= "arrow-up-bold-box"
          size={25}
          color= 'white'></MaterialCommunityIcons>
        </View>
        <View>
        <Text style={{
          color: 'black',
          fontSize: 15,
          fontWeight: 'bold',
        }}>Pay</Text>
        </View>
        </View>
        <View style={{
          alignItems: 'center',
        }}>
        <View style={{
          backgroundColor: 'skyblue',
          width: 50,
          height: 50,
          borderRadius: 25,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Entypo name= "squared-plus"
          size= {25}
          color= 'white'></Entypo>
        </View>
        <View>
        <Text style={{
          color: 'black',
          fontSize: 15,
          fontWeight: 'bold',
        }}>Top-Up</Text>
        </View>
        </View>
        <View style={{
          alignItems: 'center',
        }}>
        <View style={{
          backgroundColor: 'skyblue',
          width: 50,
          height: 50,
          borderRadius: 25,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <MaterialCommunityIcons name= "arrow-down-bold-box"
          size={25}
          color= 'white'></MaterialCommunityIcons>
        </View>
        <View>
        <Text style={{
          color: 'black',
          fontSize: 15,
          fontWeight: 'bold',
        }}>Request</Text>
        </View>
        </View>
        <View style={{
          alignItems: 'center',
        }}>
        <View style={{
          backgroundColor: 'skyblue',
          width: 50,
          height: 50,
          borderRadius: 25,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Ionicons name= "send"
          size={20}
          color= 'white'></Ionicons>
        </View>
        <View>
        <Text style={{
          color: 'black',
          fontSize: 15,
          fontWeight: 'bold',
        }}>PayLater</Text>
        </View>
        </View>
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 20,
        }}>
        <View style={{
          alignItems: 'center',
        }}>
        <View style={{
          backgroundColor: 'skyblue',
          width: 50,
          height: 50,
          borderRadius: 25,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <MaterialCommunityIcons name="cash-usd"
          size= {23}
          color= 'white'></MaterialCommunityIcons>
        </View>
        <View>
        <Text style={{
          color: 'black',
          fontSize: 15,
          fontWeight: 'bold',
        }}>Cash Out</Text>
        </View>
        </View>
        <View style={{
          alignItems: 'center',
        }}>
        <View style={{
          backgroundColor: 'skyblue',
          width: 50,
          height: 50,
          borderRadius: 25,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <MaterialCommunityIcons
          name="bookmark-plus"
          size={25}
          color= 'white'></MaterialCommunityIcons>
        </View>
        <View>
        <Text style={{
          color: 'black',
          fontSize: 15,
          fontWeight: 'bold',
        }}>Plus</Text>
        </View>
        </View>
        <View style={{
          alignItems: 'center',
        }}>
        <View style={{
          backgroundColor: 'skyblue',
          width: 50,
          height: 50,
          borderRadius: 25,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <FontAwesome5 name= "coins"
          size={22}
          color= 'white'></FontAwesome5>
        </View>
        <View>
        <Text style={{
          color: 'black',
          fontSize: 15,
          fontWeight: 'bold',
        }}>Go Tagihan</Text>
        </View>
        </View>
        <View style={{
          alignItems: 'center',
        }}>
        <View style={{
          backgroundColor: 'white',
          width: 50,
          height: 50,
          borderRadius: 25,
          overflow: 'hidden',
        }}>
        
        </View>
        <View>
        <Text style={{
          color: 'black',
          fontSize: 15,
          fontWeight: 'bold',
        }}></Text>
        </View>
        </View>
        </View>

        <View style={{
            display: 'flex',
            backgroundColor: 'white',
            height: 160,
            margin: 5,
            borderRadius: 10,
            borderWidth:2,
            marginTop: 20,
        }}>
        <View style={{
          padding: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          
        }}>
        <View style={{
          flexDirection: 'column',
          
        }}>
        <Text style= {{
            fontFamily: 'arial',
            fontWeight: 'bold',
            color: '#112031',
            fontSize: 15,
            marginLeft: 5,
        }}>Gopay Friends
        </Text>
        <Text style= {{
            fontFamily: 'arial',
            color: 'black',
            fontSize: 12,
            marginLeft: 5,
        }}>These are who you last sent or request Gopay to.
        </Text>
        <Text style= {{
            fontFamily: 'arial',
            color: 'black',
            fontSize: 12,
            marginLeft: 5,
        }}>Tap their name to send again.
        </Text>
        </View>
        <Text style= {{
            fontFamily: 'arial',
            color: '#6ECB63',
            fontWeight: 'bold',
            fontSize: 14,
            marginRight: 5,
        }}>See More
        </Text>
        </View>
        <View style={{
          padding: 20,
          flexDirection: 'row',
          justifyContent: 'flex-start',
        }}>
        <View style={{
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Image style={{width:50, height:50,}} source={ require('./vector.png')} />
        <Text style= {{
          fontWeight: 'bold',
          fontSize: 15,
          marginTop: -2,
        }}>Rama</Text>
        </View>
        <View style={{
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Image style={{width:50, height:50,}} source={ require('./avt.png')} />
        <Text style= {{
          fontWeight: 'bold',
          fontSize: 15,
          marginTop: -1,
        }}>Shinta</Text>
        </View>
        <View style={{
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Image style={{width:50, height:50,}} source={ require('./avt2.png')} />
        <Text style= {{
          fontWeight: 'bold',
          fontSize: 15,
          marginTop: -1,
        }}>Jooki</Text>
        </View>
        </View>
        <View style={{
          flexDirection: 'column',
          marginLeft: 10,
        }}>
        <Text style={{
          fontSize: 20,
          color: 'white',
          fontWeight: 'bold',
        }}>Satria Dafa</Text>
        <Text style= {{
          fontSize: 15,
          color: 'white',
        }}>Tap to See Your Gojek Profile</Text>
        </View>  
        </View>
        <View style={{
          padding: 20,
        }}>
        <Text style={{
          fontFamily: 'arial',
          fontWeight: 'bold',
          color: '#112031',
          fontSize: 15,
        }}>
          History
        </Text>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottomWidth: 1,
        }}>
        <View style={{
          marginTop: 10,
        }}>
          <Text style={{
            fontWeight: 'bold',
            color: '#112031',
            fontSize: 15,
          }}>Gopay Top-Up
          </Text>
          <Text style={{
            color: '#112031',
            fontSize: 20,
          }}
          >#2093774218741827
          </Text>
          <Text style={{
            fontSize: 13,
          }}>09 Apr, 9.30 PM
          </Text>
        </View>
        <View style={{
          flexDirection: 'row',
          marginTop:10,
        }}>
          <Text style={{
            color: '#6ECB63',
            fontWeight: 'bold',
          }}
          >RP
          </Text>
          <Text style={{
            color: '#6ECB63',
            fontWeight: 'bold',
            fontSize: 25,
          }}
          >51.000
          </Text>
        </View>
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottomWidth: 1,
        }}>
        <View style={{
          marginTop: 10,
        }}>
          <Text style={{
            fontWeight: 'bold',
            color: '#112031',
            fontSize: 15,
          }}>Gopay Top-Up
          </Text>
          <Text style={{
            color: '#112031',
            fontSize: 20,
          }}
          >#2075348578530948
          </Text>
          <Text style={{
            fontSize: 13,
          }}>09 Apr, 9.30 PM
          </Text>
        </View>
        <View style={{
          flexDirection: 'row',
          marginTop:10,
        }}>
          <Text style={{
            color: '#6ECB63',
            fontWeight: 'bold',
          }}
          >RP
          </Text>
          <Text style={{
            color: '#6ECB63',
            fontWeight: 'bold',
            fontSize: 25,
          }}
          >21.000
          </Text>
        </View>
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottomWidth: 1,
        }}>
        <View style={{
          marginTop: 10,
        }}>
          <Text style={{
            fontWeight: 'bold',
            color: '#112031',
            fontSize: 15,
          }}>Gopay Top-Up
          </Text>
          <Text style={{
            color: '#112031',
            fontSize: 20,
          }}
          >#2002359036879304
          </Text>
          <Text style={{
            fontSize: 13,
          }}>09 Apr, 9.30 PM
          </Text>
        </View>
        <View style={{
          flexDirection: 'row',
          marginTop:10,
        }}>
          <Text style={{
            color: '#6ECB63',
            fontWeight: 'bold',
          }}
          >RP
          </Text>
          <Text style={{
            color: '#6ECB63',
            fontWeight: 'bold',
            fontSize: 25,
          }}
          >41.000
          </Text>
        </View>
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottomWidth: 1,
        }}>
        <View style={{
          marginTop: 10,
        }}>
          <Text style={{
            fontWeight: 'bold',
            color: '#112031',
            fontSize: 15,
          }}>Gopay Top-Up
          </Text>
          <Text style={{
            color: '#112031',
            fontSize: 20,
          }}
          >#2002359036879304
          </Text>
          <Text style={{
            fontSize: 13,
          }}>09 Apr, 9.30 PM
          </Text>
        </View>
        <View style={{
          flexDirection: 'row',
          marginTop:10,
        }}>
          <Text style={{
            color: '#6ECB63',
            fontWeight: 'bold',
          }}
          >RP
          </Text>
          <Text style={{
            color: '#6ECB63',
            fontWeight: 'bold',
            fontSize: 25,
          }}
          >67.000
          </Text>
        </View>
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottomWidth: 1,
        }}>
        <View style={{
          marginTop: 10,
        }}>
          <Text style={{
            fontWeight: 'bold',
            color: '#112031',
            fontSize: 15,
          }}>Gopay Top-Up
          </Text>
          <Text style={{
            color: '#112031',
            fontSize: 20,
          }}
          >#2002359036879304
          </Text>
          <Text style={{
            fontSize: 13,
          }}>09 Apr, 9.30 PM
          </Text>
        </View>
        <View style={{
          flexDirection: 'row',
          marginTop:10,
        }}>
          <Text style={{
            color: '#6ECB63',
            fontWeight: 'bold',
          }}
          >RP
          </Text>
          <Text style={{
            color: '#6ECB63',
            fontWeight: 'bold',
            fontSize: 25,
          }}
          >32.000
          </Text>
        </View>
        </View>
        </View>
        </View>
      </ScrollView> 
        
    );
};

export default glints;
