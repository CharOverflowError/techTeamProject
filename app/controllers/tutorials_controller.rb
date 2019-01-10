class TutorialsController < ApplicationController
	before_action :authenticate_admin!, only: [:create, :new, :edit, :update, :destroy]
	skip_before_action :verify_authenticity_token

	def create
		@tutorial = Tutorial.new(tutorial_params)

		if @tutorial.save
			redirect_to @tutorial
		else
			render 'new'
		end
	end

	def new
		@tutorial = Tutorial.new
	end

	def edit
        @tutorial = Tutorial.find(params[:id])
	end

	def show
		@tutorial = Tutorial.find(params[:id])
	end

	def update
	    @tutorial = Tutorial.find(params[:id])
 
		if @tutorial.update(tutorial_params)
		  redirect_to @tutorial
		else
		  render 'edit'
        end
	end

	def destroy
		@tutorial = Tutorial.find(params[:id])
		@tutorial.destroy

		redirect_to tutorials_path
	end

	private
		def tutorial_params
			params.require(:tutorial).permit(:title, :explanation, :code, :interactive)
		end


end
