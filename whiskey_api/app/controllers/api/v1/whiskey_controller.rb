class Api::V1::WhiskeyController < ApplicationController
    def index
    	@whiskies = Whiskey.all
      render json: @whiskies
    end
end
