# new
# create
# show
class DoctorsController < ApplicationController

    # index
    get "/doctors" do
        @doctors = Doctor.all
        erb :'/doctors/index.html'
    end

    # index
    get "/doctors/:id/edit" do
        @doctor = Doctor.find(params[:id])
        erb :'/doctors/edit.html'
    end

    # new
    get "/doctors/new" do
        erb :'/doctors/new.html'
    end

    # create
    post "/doctors" do
        doctor = Doctor.create(params)
        redirect "/doctors/#{doctor.id}"
    end

    # update
    patch "/doctors/:id" do
        doctor = Doctor.find(params[:id])
        doctor.update(params[:doctor])
        redirect "/doctors/#{doctor.id}"
    end

    # update
    delete "/doctors/:id" do
        doctor = Doctor.find(params[:id])
        doctor.destroy
        redirect "/doctors"
    end

    # show
    get "/doctors/:id" do
        @doctor = Doctor.find(params['id'])
        erb :'/doctors/show.html'
    end

end