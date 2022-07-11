import React, {Component} from 'react';
import { HashRouter, Route, useHistory} from 'react-router-dom'
import { connect } from 'react-redux'
import 'antd/dist/antd.css';
import { Layout, Spin } from 'antd';
import "./index.css";
import Dashboards from './containers/Dashboards/Dashboards.js';
import { AnimatedSwitch } from 'react-router-transition';
import Sidebar from './containers/Sidebar/Sidebar';
import CustomerAudit from './containers/CustomerAudit/CustomerAudit';
import TestContainer from './containers/TestContainer/TestContainer';
import AnimalProfile from './containers/AnimalProfile/AnimalProfile';
import CubeJs from './containers/CubeJs/CubeJs';






const { Header, Content } = Layout;



class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      
    };

}

componentDidMount(){

  // this.props.getAcceptedGroups()

}

componentDidUpdate(prevProps, prevState, snapshot){
      // if (prevProps.acceptedGroups !== this.props.acceptedGroups) {
      //   this.props.appLog(authProvider.account.userName, 'login')
      //   checkGroup(this, this.props.acceptedGroups)
      // }
  

}



  
render(){


    return (
        <HashRouter onChange = {this.test} >

        <div className = 'app-background' id ='App'>

                    <Layout style={{ minHeight: "100vh" }}>
                      <Sidebar user  = {'test'}/>
                      <Layout style={{  }}>
                        <Header className = 'header-main'>
                          <h2 style = {{color:"#F3F2F1" ,fontSize:22}}>Animal Friends Volunteering</h2>
                        </Header>
                        <Content style={{ padding: "0 16px", position: 'relative', overflowY:'auto'}}>
                            <AnimatedSwitch
                              // atEnter={{ offset: -100 }}
                              // atLeave={{ offset: 0 }}
                              // atActive={{ offset: 0 }}
                              // mapStyles={(styles) => ({
                              //   transform: `translateX(${styles.offset}%)`,
                              // })}
                              atEnter={{ opacity: 0 }}
                              atLeave={{ opacity: 0 }}
                              atActive={{ opacity: 1 }}
                              className="switch-wrapper"
                            >
                              <Route exact path='/' component={Dashboards} />
                              <Route exact path='/shelterluv' component={CustomerAudit}/>
                              <Route exact path='/test' component={TestContainer}/>
                              <Route exact path='/animalprofile' component={AnimalProfile} /> 
                              <Route exact path='/cubejs' component={CubeJs}/>
                            
                            </AnimatedSwitch>
                        </Content>
                        
                      </Layout>
                    </Layout>

              
        </div>
      </HashRouter>

    ); 


  }

}

const mapStateToProps = state => {
  return {
    // isTeams:state.auth.isTeams,
    // auth:state.auth.authGroups,
    // acceptedGroups:state.auth.acceptedGroups,
    dashboards: state.dashboards.dashboards,
    // acceptedDashboards: state.dashboards.acceptedDashboards,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    // authenticateUser: (value) => dispatch(authenticateUser(value)),
    // getAcceptedGroups: () => dispatch(getAcceptedGroups()),
    // getDashboards: (groups,query) => dispatch(getDashboards(groups, query)),
    // appLog: (user,type) => dispatch(appLog(user,type)),
      
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

