from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin

db = SQLAlchemy()



class User(db.Model, UserMixin):
    __tablename__ ='users'

    id = db.Column(db.Integer, primary_key= True)
    user_name= db.Column(db.String(50), nullable=False)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(200),nullable=False, unique =True)
    hashed_password =db.Column(db.String(128))

    routes = db.relationship("Route", secondary="followedroutes", back_populates="users")
    areas = db.relationship("Area", secondary="followedareas", back_populates="users")



    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def set_password(self,password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self,password):
        return check_password_hash(self.password, password)

    def get_token(self):
        return create_access_token(identity={'email': self.email, 'id': self.id})

    def to_dict(self):
        return {"id": self.id, "user_name": self.user_name, "first_name": self.first_name, "last_name": self.last_name, "email": self.email}



class Area(db.Model):
    __tablename__ = "areas"

    id= db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(200), nullable = False)
    description = db.Column(db.Text)
    
    routes = db.relationship("Route", back_populates="area")
    users = db.relationship("User", secondary="followedareas", back_populates="areas")

    def to_dict(self):
        return {"id": self.id, "name":self.name}

class Route(db.Model):
    __tablename__ = "routes"

    id= db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(255), nullable = False, unique= True)
    description = db.Column(db.Text)
    grade = db.Column(db.String(30))
    type = db.Column(db.String(100))
    image_url = db.Column(db.String(255))
    latitude = db.Column(db.Float)
    longitude = db.Column(db.Float)
    area_id = db.Column(db.Integer, db.ForeignKey("areas.id"),nullable=False)

    area = db.relationship("Area", back_populates="routes")
    users = db.relationship("User", secondary="followedroutes", back_populates="routes")

    def to_dict(self):
        return {"id": self.id, "name": self.name, "grade": self.grade, "type": self.type, "image_url": self.image_url, "latitude": self.latitude, "longitude": self.longitude,"area_id": self.area_id}


class FollowedRoute(db.Model):
    __tablename__ ='followedroutes'

    user_id = db.Column(db.Integer,db.ForeignKey("users.id"),primary_key = True)
    route_id = db.Column(db.Intger, db.ForeignKey("routes.id"),primary_key = True)

    def to_dict(self):
        return {"user_id": self.user_id, "route_id": self.route_id}

class FollowedArea(db.Model):
    __tablename__ ='followedareas'
    
    user_id = db.Column(db.Integer,db.ForeignKey("users.id"),primary_key = True)
    route_id = db.Column(db.Integer, db.ForeignKey("areas.id"),primary_key = True)

    def to_dict(self):
        return {"user_id": self.user_id, "area_id": self.area_id}