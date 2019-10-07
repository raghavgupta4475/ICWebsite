import React,{Component} from 'react';
import firebase from 'firebase';
import firestore from '../../firebase.js'
import InfoDisplay from '../../components/InfoArea/InfoDisplay.js'
import InfoDisplay2 from '../../components/InfoArea/ii';
import Header from 'components/Header/Header.jsx';
import './CreditDetails.css'
class CreditDetails extends Component{
    state={
        ICcredit:0,
        paymentsmade:0,
        Studentcredit:0
    }

    componentDidMount=()=>{
        const db=firebase.firestore();
        db.collection('credit').doc('PU')
        .onSnapshot((doc=>{
            this.setState({ICcredit:doc.data().credit,paymentsmade:doc.data().paymentsMade})
        }))
        let sum=0;
        const ref2=db.collection('students')
        .get().then((querySnapshot)=>{
            querySnapshot.forEach((doc)=>{
                sum=sum+doc.data().reimbursement;
            })
            this.setState({Studentcredit:sum})
            console.log(sum)
        })
        
    }
    render(){
        return(
            <html>
                <body className="creditheader">
                    <Header
                    absolute
                    color="info"
                    brand="Credit Details"/>
                    <InfoDisplay2 title="Credit owed to IC" description={JSON.stringify(this.state.ICcredit)}/>
                    <InfoDisplay title="Payments made" description={JSON.stringify(this.state.paymentsmade)}/>
                    <InfoDisplay title="Students Credit" description={JSON.stringify(this.state.Studentcredit)}/>
                </body>
            </html>
                
        )
    }
}
export default CreditDetails