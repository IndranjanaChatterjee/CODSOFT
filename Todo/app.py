from flask import Flask, render_template,request,redirect
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, Integer, String
from datetime import datetime
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///todo.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False
db=SQLAlchemy(app)

class Todo(db.Model):
    sno=db.Column(db.Integer,primary_key=True)
    title=db.Column(db.String(200),nullable=False)
    desc=db.Column(db.String(500),nullable=False)
    date_created=db.Column(db.DateTime,default=datetime.utcnow)

    def __repr__(self) -> str:
        return f"{self.sno} - {self.title}"



@app.route('/',methods=['GET','POST'])
def hello_world():
    if request.method=='POST':
        desc=request.form['desc']
        title=request.form['title']
        todo=Todo(title=title,desc=desc)
        db.session.add(todo)
        db.session.commit()
        
    allTodo=Todo.query.all()
    return render_template('index.html',allTodo=allTodo)

@app.route('/introduction')
def introduction():
    allTodo=Todo.query.all()
    print(allTodo)
    return 'Welcome!'

@app.route('/update/<int:sno>',methods=['GET','POST'])
def update(sno):
    if request.method=='POST':
        desc=request.form['desc']
        title=request.form['title']
        allTodo=Todo.query.filter_by(sno=sno).first()
        allTodo.title=title
        allTodo.desc=desc
        db.session.add(allTodo)
        db.session.commit()
        return redirect('/')
    allTodo=Todo.query.filter_by(sno=sno).first()
    
    return render_template('update.html',allTodo=allTodo)

@app.route('/delete/<int:sno>')
def delete(sno):
    allTodo=Todo.query.filter_by(sno=sno).first()
    db.session.delete(allTodo)
    db.session.commit()
    
    return redirect('/')

if __name__=='__main__':
    app.run(debug=True,port=8000)