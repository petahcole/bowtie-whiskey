class WhiskeyController < ApplicationController
    def index
    	whiskies = Whiskey.all
        render json: {status: 'SUCCESS', message: 'Loaded all whiskies', data: whiskies}, status: :ok
    end 
end
