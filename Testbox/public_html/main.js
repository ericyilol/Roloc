/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


world = new b2World(
  new b2Vec2(0, 10)    //gravity
  ,  true                 //allow sleep
);

var fixDef = new b2FixtureDef;
fixDef.density = 1.0;
fixDef.friction = 0.5;
fixDef.restitution = 0.2;

var bodyDef = new b2BodyDef;
bodyDef.type = b2Body.b2_staticBody;
       
// positions the center of the object (not upper left!)
//bodyDef.position.x = CANVAS_WIDTH / 2 / SCALE;
//bodyDef.position.y = CANVAS_HEIGHT / SCALE;

fixDef.shape = new b2PolygonShape;
       
// half width, half height.
fixDef.shape.SetAsBox((600 / SCALE) / 2, (10/SCALE) / 2);

