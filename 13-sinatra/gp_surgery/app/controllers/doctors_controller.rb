# new
# create
# show
class DoctorsController < ApplicationController

    # new
    get "/doctors/new" do
        erb :'/doctors/new.html'
    end

    # create
    post "/doctors" do
        doctor = Doctor.create(params)
        redirect "/doctors/#{doctor.id}"
    end

    # show
    get "/doctors/:id" do
        @doctor = Doctor.find(params['id'])
        erb :'/doctors/show.html'
    end

end