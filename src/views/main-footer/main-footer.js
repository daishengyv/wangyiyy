
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTopicList } from '../../redux/topic-list.reducer'
import {Row, Col,Icon,  Button} from 'antd'

const ButtonGroup = Button.Group


@connect(
    state => state.topicListReducer,
    { getTopicList }
  )
class MainFooter extends Component {

    state = {
        value: null,
        beginTime:0,
        allTime:0,
        switch:'caret-right',
        collapsed: false,
        time:'null'
      }
   

      onCollapse = (collapsed) => {
        console.log(collapsed)
        this.setState({ collapsed })
      }

      componentDidMount() {
       
          let that = this
         

          setTimeout(function(){

               console.log(that.music.currentTime,that.music.duration,that.state);

           
               console.log( that.changeTime(that.music.duration))


               that.time = setInterval(function(){
                console.log(that.music.currentTime,that.music.duration)
                that.setState({beginTime:that.music.currentTime,allTime:that.music.duration})
                 
                
                },1000/60)


            },500)

        

        // (()=>{

        //   axios.get('/search', {
        //     params: {
        //       keywords : '海阔天空'
        //     },
        //   }).then((res) => {
        //     console.log(res)
        //   })
    
        // })()
        //-webkit-linear-gradient(left, blue 26%, orange 37%, yellow 36%)



    }

    componentWillUnmount() {
        console.log('this is componentWillUnmount')
    
    }

    changeTime(num){
        num = parseInt(num)
        let m = Math.floor(num%3600/60)
        m = m<=9? '0'+ m:m
        let s = Math.floor(num%60)
        s = s<=9? '0'+ s:s
        return m +':'+s
    }
    render() {
        return (
         
            
                <footer style={{height:'10%'}}>
                                    <div style={{width:'100%',height:'6%',background:'#fff',position:'relative',backgroundColor: 'rgba(0,0,0,0.3)'}}>
                                        <div style={{position:'absolute',width:`${this.state.beginTime/this.state.allTime*100}%`,height:'100%',top:'0',backgroundColor:'#000'}}></div>
                                        <div style={{position:'absolute',bottom:'115%',width:'80px',marginLeft:'-80px',textAlign:'center',left:`${this.state.beginTime/this.state.allTime*100}%`,backgroundColor:'#f1f2f3'}}>{this.changeTime(this.state.beginTime)}/{this.changeTime(this.state.allTime)}</div>
                                    </div>
                                    <Row style={{height:'94%',overflow:'hidden'}}>
                                        <Col xs={0} sm={0} md={12} lg={12} xl={12} xxl={12} style={{height:'100%'}}>
                                        <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                                            <img style={{height:'100%',margin:'0 1%'}} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt=""/>
                                            <div>
                                                <div onClick={()=>{console.log(this)}}>ssssssss {this.props.topics.mname}</div>
                                                <div> {this.props.topics.rname}</div>
                                            </div>
                                        </div>
                                        </Col>
                                        <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}  style={{height:'100%'}}>
                                        <audio  ref={(audio) => {this.music = audio;}} src= { this.props.topics.data[0].url  } />
                                            <ButtonGroup style={{height:'100%',display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                                <Button type="primary" size='large' style={{border:'0'}} ghost>
                                                    <Icon style={{color:'#000', fontSize:'20px'}} type="heart-o" />
                                                </Button>
                                                <Button type="primary" size='large'  style={{border:'0'}} ghost>
                                                    <Icon style={{color:'#000', fontSize:'20px'}} type="retweet" /> <Icon type="swap-right" />
                                                </Button>
                                                <Button type="primary" size='large' style={{border:'0'}} ghost>
                                                    <Icon style={{color:'#000', fontSize:'20px'}} type="backward" />
                                                </Button>
                                                <Button type="primary" size='large' style={{border:'0'}} ghost onClick = {()=>{
                                                    this.music.paused ? this.music.play() : this.music.pause();
                                                    this.music.paused ? this.setState({switch: 'caret-right'}) : this.setState({switch: 'pause'});
                                                    console.log(this);
                                                    console.log(this.music.duration,this.music.paused) }}>
                                                    <Icon style={{color:'#000', fontSize:'20px'}}  type = {this.state.switch} />
                                                </Button>
                                                <Button type="primary" size='large' style={{border:'0'}} ghost>
                                                    <Icon style={{color:'#000', fontSize:'20px'}} type="forward" />
                                                </Button>
                                            </ButtonGroup>
                                        </Col>
                                    </Row>
                                </footer>
        )
    }
}

export default MainFooter