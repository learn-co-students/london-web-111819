class AppointmentsController < ApplicationController

  # GET: /appointments
  get "/appointments" do
    erb :"/appointments/index.html"
  end

  # GET: /appointments/new
  get "/appointments/new" do
    @doctors = Doctor.all
    @patients = Patient.all
    @doctor = params[:doctor_id] ? Doctor.find(params[:doctor_id]) : nil
    @appointment = Appointment.new
    erb :"/appointments/new.html"
  end

  # POST: /appointments
  post "/appointments" do
    appointment = Appointment.create(params[:appointment])
    redirect "/appointments/#{appointment.id}"
  end

  # GET: /appointments/5
  get "/appointments/:id" do
    @appointment = Appointment.find(params[:id])
    erb :"/appointments/show.html"
  end

  # GET: /appointments/5/edit
  get "/appointments/:id/edit" do
    @doctors = Doctor.all
    @patients = Patient.all
    @appointment = Appointment.find(params[:id])
    erb :"/appointments/edit.html"
  end

  # PATCH: /appointments/5
  patch "/appointments/:id" do
    appointment = Appointment.find(params[:id])
    appointment.update(params[:appointment])
    redirect "/appointments/#{appointment.id}"
  end

  # DELETE: /appointments/5/delete
  delete "/appointments/:id/delete" do
    redirect "/appointments"
  end
end
