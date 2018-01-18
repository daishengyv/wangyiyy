import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import TopicIndex from '../views/topic-index/topic-index'
import TopicOther from '../views/topic-other/topic-other'
import PlayList from '../views/play-list/play-list'

export default () => (
  <div style={{height:'74%'}}>
    <Switch>
      <Route path="/" exact render={() => (<Redirect to="/index" />)} />,
      <Route path="/index" exact component={TopicIndex} />
      <Route path="/my" component={TopicOther} />
      <Route path="/friend" component={TopicOther} />
      <Route path="/product" component={TopicOther} />
      <Route path="/nmusician" component={TopicOther} />
      <Route path="/download" component={TopicOther} />



      <Route path="/discover" component={TopicIndex} />
      <Route path="/toplist" component={TopicOther} />
      <Route path="/playlist" component={TopicOther} />
      <Route path="/djradio" component={TopicOther} />
      <Route path="/artist" component={TopicOther} />
      <Route path="/album" component={TopicOther} />


      <Route path="/list" component={PlayList} />




    </Switch>
  </div>
)
